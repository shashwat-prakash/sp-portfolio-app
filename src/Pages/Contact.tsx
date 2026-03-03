import { useEffect, useState, useRef } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";

interface IContactProps {}

interface Answers {
  name?: string;
  email?: string;
  contact?: string;
  justification?: string;
}

const questions = [
  { key: "name", prompt: "May I have you name please?" },
  { key: "email", prompt: "What's your email?" },
  { key: "contact", prompt: "What's your contact number?" },
  { key: "justification", prompt: "" },
];

const Contact: React.FunctionComponent<IContactProps> = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [inputValue, setInputValue] = useState("");

  // typing effect states
  interface ChatEntry {
    text: string;
    sender: "bot" | "user";
  }
  const [chatHistory, setChatHistory] = useState<ChatEntry[]>([]);

  // helper to animate any bot message typing
  const typeBotMessage = (text: string): Promise<void> => {
    return new Promise((resolve) => {
      setChatHistory((prev) => [...prev, { text: "", sender: "bot" }]);
      let idx = 0;
      const iv = setInterval(() => {
        idx += 1;
        setChatHistory((prev) => {
          const newHist = [...prev];
          newHist[newHist.length - 1] = {
            text: text.slice(0, idx),
            sender: "bot",
          };
          return newHist;
        });
        if (idx >= text.length) {
          clearInterval(iv);
          resolve();
        }
      }, 50);
    });
  };

  const typeBotMessages = async (msgs: string[]) => {
    for (const m of msgs) {
      await typeBotMessage(m);
    }
  };

  // now startTypingQuestion just calls typeBotMessage
  const startTypingQuestion = (qIndex: number) => {
    return typeBotMessage(questions[qIndex].prompt);
  };

  // start typing initial greeting and first question on mount
  const introRanRef = useRef(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // auto-scroll to bottom when chatHistory changes
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);
  useEffect(() => {
    if (introRanRef.current) return; // skip second strict-mode call
    const runIntro = async () => {
      await typeBotMessage(
        "👋 Hi there! I'm your assistant for reaching out to Shashwat.",
      );
      await startTypingQuestion(0);
    };
    runIntro();
    introRanRef.current = true;
  }, []);

  useEffect(() => {
    document.title = "Shashwat | Contact Us";
  }, []);

  const handleAnswer = () => {
    const key = questions[currentQuestion].key as keyof Answers;
    const value = inputValue.trim();
    if (!value) return;

    setAnswers((prev) => ({ ...prev, [key]: value }));
    setChatHistory((prev) => [...prev, { text: value, sender: "user" }]);
    setInputValue("");

    // personalized acknowledgement and follow-up
    let messages: string[] = [];
    if (key === "name") {
      messages.push(`Hi ${value}! Thanks for letting me know your name.`);
      messages.push("Would you please provide your email next?");
    } else if (key === "email") {
      messages.push(`Great, I have your email as ${value}.`);
      messages.push("Could you share your contact number?");
    } else if (key === "contact") {
      messages.push(`Thanks! I'll reach out at ${value} if needed.`);
      messages.push("Lastly, What brings you to contact me today?");
    } else if (key === "justification") {
      messages.push(`Appreciate the context: "${value}".`);
      messages.push(
        "Thanks for your context, we'll make sure to review your message and get back to you soon.",
      );
    }
    // sequentially type follow-up messages rather than appending instantly
    typeBotMessages(messages);

    if (currentQuestion + 1 < questions.length) {
      const next = currentQuestion + 1;
      setCurrentQuestion(next);
      // only type next question if our custom messages didn't already request that information
      // detect by looking for the next key (e.g. "email", "contact") in any follow-up message
      const nextKey = questions[next].key;
      const alreadyAsked = messages.some((m) =>
        m.toLowerCase().includes(nextKey.toLowerCase()),
      );
      if (!alreadyAsked) {
        startTypingQuestion(next);
      }
    } else {
      // finished
      toast.success("Thanks! Your information has been received.", {
        position: "top-right",
        autoClose: 3000,
      });
      setChatHistory((prev) => [
        ...prev,
        {
          text: "👍 I've collected all the details. I'll be in touch soon!",
          sender: "bot",
        },
      ]);
      console.log("collected answers", answers);
      setCurrentQuestion(questions.length);
    }
  };

  return (
    <>
      <Container className="contact-us-page">
        {/* chat display */}
        <Row className="my-1 justify-content-center">
          <Col md={8}>
            <div
              ref={chatContainerRef}
              style={{
                display: "flex",
                flexDirection: "column",
                background: "#f7f9fb",
                borderRadius: "15px",
                padding: "20px 30px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                marginBottom: "40px",
                height: "500px",
                overflowY: "auto",
              }}
            >
              {chatHistory.map((entry, i) => (
                <p
                  key={i}
                  style={{
                    background: entry.sender === "bot" ? "#eef2ff" : "#d1ffd6",
                    padding: "10px 15px",
                    borderRadius: "20px",
                    maxWidth: "80%",
                    alignSelf:
                      entry.sender === "bot" ? "flex-start" : "flex-end",
                    margin: "8px 0",
                    fontSize: "0.95rem",
                  }}
                >
                  {entry.text}
                </p>
              ))}
            </div>
            {/* input box */}
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                if (currentQuestion < questions.length) {
                  handleAnswer();
                }
              }}
            >
              <Form.Group>
                <Form.Control
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Your reply..."
                  disabled={currentQuestion >= questions.length}
                />
              </Form.Group>
              <Button
                variant="primary"
                className="mt-2"
                onClick={handleAnswer}
                disabled={currentQuestion >= questions.length}
              >
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;

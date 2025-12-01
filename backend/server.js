// backend/server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Allow requests from your frontend during development
app.use(cors()); 
app.use(express.json()); // parse JSON body

// Serve resume PDF (so frontend can preview/download it)
app.use("/static", express.static(path.join(__dirname, "public")));
// put your resume.pdf in backend/public/resume.pdf

// POST endpoint for contact form
app.post("/send-message", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Missing fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // send to yourself (or another address)
      subject: `Portfolio Contact: ${name} <${email}>`,
      text: message,
      html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return res.json({ success: true, message: "Message sent successfully" });
  } catch (err) {
    console.error("Send mail error:", err);
    return res.status(500).json({ success: false, error: "Could not send message" });
  }
});

// (optional) simple health check
app.get("/health", (req, res) => res.json({ ok: true }));

// default route if you want (not necessary if front served elsewhere)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "resume.pdf"));
});

// listen on port from env or fallback
const PORT = Number(process.env.PORT) || 5000;

const server = app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

// handle start-up errors (EADDRINUSE)
server.on("error", (err) => {
  console.error("Server error:", err);
  if (err.code === "EADDRINUSE") {
    console.error(`Port ${PORT} is already in use. Kill process or change PORT.`);
  }
});
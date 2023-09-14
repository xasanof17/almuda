import nodemailer, { Transporter, Transport } from "nodemailer";

export async function POST(request: Request) {
  const {} = request.json();

  const transporter: Transporter = nodemailer.createTransport("SMTP", {
    service: "Gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "xasanof17@gmail.com",
      pass: "j20050924",
    },
    
  });
}

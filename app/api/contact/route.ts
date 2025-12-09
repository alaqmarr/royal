import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    // 1. Save to Database
    await prisma.contactMessage.create({
      data: {
        name,
        email,
        phone,
        message: `[${subject}] ${message}`,
      },
    });

    // 2. Send Email via Nodemailer
    // Note: Configure these ENV vars in production
    if (process.env.SMTP_HOST && process.env.SMTP_USER) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: '"Royal Ind Corp" <noreply@royalindustrialcorp.com>',
        to: "info@royalindustrialcorp.com", // Sends to admin
        replyTo: email,
        subject: `New Inquiry: ${subject} from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
        html: `
          <h3>New Website Inquiry</h3>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <hr/>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      });
    } else {
      console.warn("SMTP Not Configured - Email skipped, but saved to DB");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact Form Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

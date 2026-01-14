import { Resend } from "resend";
import { ContactEmail } from '../../../emails/EmailTemplate';
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing fields" },
                { status: 400 }
            );
        }

        await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>", // use resend verified domain later
            to: ["muhammadammar1806dev@gmail.com"],
            subject: "New Portfolio Contact Message",
            react: ContactEmail({ name, email, message }),
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}

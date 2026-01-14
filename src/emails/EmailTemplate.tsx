import { Html, Body, Container, Text, Heading } from "@react-email/components";

type Props = {
    name: string;
    email: string;
    message: string;
};

export function ContactEmail({ name, email, message }: Props) {
    return (
        <Html>
            <Body>
                <Container>
                    <Heading>New Contact Message</Heading>
                    <Text><strong>Name:</strong> {name}</Text>
                    <Text><strong>Email:</strong> {email}</Text>
                    <Text>{message}</Text>
                </Container>
            </Body>
        </Html>
    );
}

import BotaoChat from "@/components/chat/chat";

export default function Layout (props: {children: React.ReactNode}) {
    return (
        <div>
            {props.children}
            <BotaoChat />
        </div>
    )
}
import { Title } from "./styles";

function DefaultTitle ({children, ...props}) {

    return (
        <Title {...props}>
           {children} 
        </Title>
    )
}

export default DefaultTitle
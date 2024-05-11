
const Blog = () => {
    return (
        <div className="max-w-[1170px] mx-auto mt-10">
            <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                What is an access token and refresh token?
                </div>
                <div className="collapse-content">
                    <p>Access Token and Refresh Token:
An access token is a credential used by a client to access protected resources on an API. It is usually short-lived and grants specific permissions to the client. A refresh token is a credential used to obtain a new access token once the current one expires. It is long-lived and is used to maintain a users session without requiring them to re-authenticate. Access tokens are typically stored in memory or in secure storage on the client side, while refresh tokens should be securely stored, possibly encrypted, in long-term storage on the client side.</p>
                </div>
            </div>
            <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                What is Express.js?
                </div>
                <div className="collapse-content">
                    <p>NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It uses TypeScript and is heavily inspired by Angular, providing a similar structure and syntax. NestJS leverages the power of TypeScript to bring strong typing and features like dependency injection to the Node.js ecosystem.</p>
                </div>
            </div>
            <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                    What is JWT (JSON Web Tokens)?
                </div>
                <div className="collapse-content">
                    <p>JWT is a compact, URL-safe means of representing claims to be transferred between two parties. It is commonly used for authentication and authorization in web applications. JWTs can be digitally signed and optionally encrypted, making them a secure way to transmit information between parties.</p>
                </div>
            </div>
            
            <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                    What is Cross-Origin Resource Sharing (CORS)?
                </div>
                <div className="collapse-content">
                    <p>CORS is a security feature implemented by web browsers to restrict cross-origin HTTP requests initiated from scripts running in the browser. It ensures that resources from one origin can only be accessed by requests from the same origin unless explicit permission is granted.</p>
                </div>
            </div>
            
            <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                    What is HTTPS (Hypertext Transfer Protocol Secure)?
                </div>
                <div className="collapse-content">
                    <p>HTTPS is the secure version of HTTP, the protocol used for communication between a web browser and a web server. It encrypts the data exchanged between the browser and the server, providing confidentiality, integrity, and authentication.</p>
                </div>
            </div>
            
            <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                    What is Session Management?
                </div>
                <div className="collapse-content">
                    <p>Session management is the process of securely handling and maintaining user sessions within a web application. It involves techniques such as session tokens, cookies, and session storage to authenticate and track user interactions with the application.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
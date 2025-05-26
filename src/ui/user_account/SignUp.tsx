import React, {useState} from "react";
import Logo from "../assets/woman.gif";
import AppLogo from "../assets/AppLogo.png"
import {useNavigate} from "react-router-dom";

type SecurityQuestion =
    | "What is your mother's maiden name?"
    | "What was the name of your first pet?"
    | "What is your favorite book?"
    | "What city were you born in?";

const securityQuestions: SecurityQuestion[] = [
    "What is your mother's maiden name?",
    "What was the name of your first pet?",
    "What is your favorite book?",
    "What city were you born in?",
];

const SignUpForm: React.FC = () => {
    // State for form inputs
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [securityQuestion, setSecurityQuestion] = useState<SecurityQuestion>(securityQuestions[0]);
    const [securityAnswer, setSecurityAnswer] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/");
    }

    const handleLanguageWithoutAccountClick = () => {
        navigate("/language");
    }

    // Email validation using regex pattern
    const validateEmail = (email: string): boolean => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email.toLowerCase());
    };

    // Handle email change and validate on input
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setEmail(val);
        if (val === "" || validateEmail(val)) {
            setEmailError(""); // clear error if valid or empty
        } else {
            setEmailError("Please enter a valid email address");
        }
    };

    // Handle form submit (can be extended to call backend API)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Basic validation before submit
        // if (!fullName.trim()) {
        //     alert("Full name is required");
        //     return;
        // }
        // if (!validateEmail(email)) {
        //     alert("Please enter a valid email address");
        //     return;
        // }
        // if (!securityAnswer.trim()) {
        //     alert("Please answer the security question");
        //     return;
        // }
        // if (!password) {
        //     alert("Please enter a password");
        //     return;
        // }
        // Form data ready to be submitted
        alert("Account created successfully!");
        // Reset form (optional)
        setFullName("SHISIA JAMES");
        setEmail("jamesshisia6@gmail.com");
        setSecurityQuestion(securityQuestions[0]);
        setSecurityAnswer("SHISIA");
        setPassword("Passwordnum8hee");
        setShowPassword(false);
    };

    return (
        <div className=" px-4 space-x-6 flex items-center justify-center h-full">
            <form
                onSubmit={handleSubmit}
                className="max-w-2xl mx-auto p-6 w-[500px] bg-white rounded-lg space-y-4"
                noValidate
            >
                <div className="flex flex-col items-center justify-center p-6
                ">
                    <div className={"flex flex-row items-center justify-center p-6"}>
                        <img src={AppLogo} alt="App Logo" className={"w-20"}/>
                        <p className={"text-4xl text-red-500 font-bold"}>&nbsp;Clutter</p>
                    </div>
                    <p className={"text-2xl font-bold text-slate-700"}>Welcome to Zen Clutter!</p>
                    <p className={"text-sm font-thin text-slate-700"}>To ensure your files are safe and only accessible
                        to you, we suggest creating an account with a strong password</p>
                    <p className={"text-sm font-thin mt-2 text-slate-700"}>To use Zen Clutter without registering an
                        account, <a className={"text-red-500 font-medium cursor-pointer"} onClick={handleLanguageWithoutAccountClick}>click here </a></p>
                </div>

                {/* Full Name Input */}
                <input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Doe"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm
          focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
                />

                {/* Email Input */}
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="example@mail.com"
                    required
                    className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none
          ${emailError ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-green-400 focus:border-green-400"}`}
                />
                {/* Email validation error message */}
                {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}

                {/* Security Question Dropdown */}
                <select
                    id="securityQuestion"
                    value={securityQuestion}
                    onChange={(e) => setSecurityQuestion(e.target.value as SecurityQuestion)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm
          focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
                >
                    {securityQuestions.map((question, idx) => (
                        <option key={idx} value={question}>
                            {question}
                        </option>
                    ))}
                </select>

                {/* Security Answer Input */}
                <input
                    id="securityAnswer"
                    type="text"
                    value={securityAnswer}
                    onChange={(e) => setSecurityAnswer(e.target.value)}
                    placeholder="Your answer"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm
          focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
                />

                <div className="relative">
                    <input
                        id="password"
                        type={showPassword ? "text" : "password"} // toggle between text and password
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm
            focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
                    />
                    {/* Show/Hide button */}
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-600 hover:text-gray-900 focus:outline-none"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                        {showPassword ? (
                            <svg
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                            >
                                {/* Eye Off Icon */}
                                <path
                                    d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10a9.978 9.978 0 014.104-7.5"/>
                                <path d="M1 1l22 22"/>

                            </svg>
                        ) : (
                            <svg
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                            >
                                {/* Eye Icon */}
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                                <circle cx="12" cy="12" r="3"/>
                            </svg>
                        )}
                    </button>
                </div>

                <p className={"text-slate-700 text-xs"}>Please review and accept our <a
                    className={"text-red-500 font-medium cursor-pointer"}>Terms of Service</a> and <a
                    className={"text-red-500 font-medium cursor-pointer"}>Privacy Policy</a></p>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md
          transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                    Create Account
                </button>
                <hr/>
                <p className={"text-sm text-slate-700 justify-center flex"}>Already have an account? <a
                    className={"text-red-500 font-medium cursor-pointer"} onClick={handleLoginClick}>&nbsp;Log in here</a></p>
            </form>
            <div>
                <img src={Logo} className={"w-fit"} alt="logo"/>
            </div>
        </div>
    );
};

export default SignUpForm;

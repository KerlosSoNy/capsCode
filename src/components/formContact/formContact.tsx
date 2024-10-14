'use client'
import React from 'react'
import toast from 'react-hot-toast';

export default function FormContactUs() {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(event.target as HTMLFormElement);

        formData.append("access_key", "fc90e1e7-4304-4914-819b-32abc364d61a");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            toast.success("Thank you for your message!");
        }
        form.reset();
    }
    return (
        <div className="flex flex-wrap justify-between items-center h-auto p-5 pl-[6%]">
            <div className="w-full">
                <form className="space-y-4 min-w-[370px] md:min-w-[600px]" onSubmit={handleSubmit}>
                    <div>
                        <input type="text" required id="fullName" name="fullName" placeholder='Full Name' className="mt-1 p-4 w-full border rounded-md text-black" />
                    </div>
                    <div>
                        <input type="email" required id="email" name="email" placeholder='Email' className="mt-1 p-4 w-full border rounded-md text-black" />
                    </div>
                    <div>
                        <textarea id="message" required name="message" placeholder='Message' className="mt-1 p-4 w-full border rounded-md text-black"></textarea>
                    </div>
                    <div className="flex mx-auto flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 my-10 w-full">
                        <button type="submit" className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm mx-auto">
                            Join now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

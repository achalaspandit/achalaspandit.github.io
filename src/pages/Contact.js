import React, { useState } from "react";

function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    return (
        <section>
            <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-300">Contact</h2>
            <form
                className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow flex flex-col gap-4"
                onSubmit={(e) => {
                    e.preventDefault();
                    window.location = `mailto:achala@email.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}`;
                }}
            >
                <input
                    type="text"
                    placeholder="Name"
                    className="border rounded px-3 py-2 dark:bg-gray-700 dark:text-white"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="border rounded px-3 py-2 dark:bg-gray-700 dark:text-white"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                />
                <textarea
                    placeholder="Message"
                    className="border rounded px-3 py-2 dark:bg-gray-700 dark:text-white"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    Send
                </button>
            </form>
            <div className="mt-8 text-center text-gray-700 dark:text-gray-200">
                <p>
                    Or email me at{" "}
                    <a
                        href="mailto:achala@email.com"
                        className="text-blue-600 dark:text-blue-400 underline"
                    >
                        achala@email.com
                    </a>
                </p>
                <p>
                    Connect on{" "}
                    <a
                        href="https://linkedin.com/in/your-linkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 underline"
                    >
                        LinkedIn
                    </a>
                </p>
            </div>
        </section>
    );
}

export default Contact;

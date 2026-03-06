import React, { useState } from 'react'
import { Send } from "lucide-react";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase.config"; // adjust path if needed


const Email = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Check if email already exists
      const q = query(
        collection(db, "newsletterSubscribers"),
        where("email", "==", email)
      );

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setMessage("You are already subscribed.");
        setLoading(false);
        return;
      }

      // Save email
      await addDoc(collection(db, "newsletterSubscribers"), {
        email,
        subscribedAt: new Date(),
      });

      setMessage("Successfully subscribed 🎉");
      setEmail("");
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className=''>
        <form onSubmit={handleSubmit} className='relative w-full max-w-md'>
            <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder= 'Enter Your Email' 
            className='w-full flex-1 rounded-lg border border-neutral-700 bg-transparent px-4 py-3  pr-12 text-sm text-white placeholder-neutral-400 focus:outline-none focus:ring-2 '
            required
            />

              <button
                type="submit"
                disabled={loading}
                className="
                  absolute right-2 top-1/2 -translate-y-1/2
                  rounded-md p-2 text-neutral-400
                  hover:text-white hover:bg-neutral-800
                  transition
                "
                aria-label="Submit email"
              >
                 <Send className="h-5 w-5" />
              </button>

        </form>
        {message && (
        <p className="mt-2 text-sm text-neutral-400">{message}</p>
      )}
    </div>
  )
}

export default Email
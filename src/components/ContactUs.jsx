import { useRef } from "react"; // Import useRef
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  const formRef = useRef(); // Create a ref for the form

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_API,
        import.meta.env.VITE_EMAIL_TEMPLATE_API,
        e.target,
        import.meta.env.VITE_PUBLIC_API_KEY
      )
      .then(
        (result) => {
          toast.success("Your message has been sent successfully!");
          console.log(result);
          formRef.current.reset();
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };

  return (
    <div className="bg-[#F4F4F4] py-10 rounded-lg">
      <h1 className="text-xl lg:text-3xl md:text-2xl text-[#6A1B9A] font-bold mb-8 text-center">
        Contact Information
      </h1>
      <div className="container mx-auto rounded-lg p-8">
        <div className="space-y-6 lg:flex lg:space-x-8 lg:space-y-0 lg:justify-between">
          {/* Left Section: Contact Info */}
          <div className="lg:w-1/2 space-y-6">
            {/* Location */}
            <div className="flex items-center space-x-4">
              <MdLocationOn className="text-3xl text-red-500" />
              <div>
                <h2 className="text-xl font-semibold text-[#6A1B9A]">
                  Location
                </h2>
                <p className="text-lg text-[#6A1B9A]">
                  Pabna, Dhaka, Bangladesh
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <MdEmail className="text-3xl text-yellow-500" />
              <div>
                <h2 className="text-xl text-[#6A1B9A] font-semibold">
                  Email Address
                </h2>
                <p className="text-lg text-[#6A1B9A]">
                  You can reach me at my email:{" "}
                  <a
                    href="mailto:rafidislamrohit576@gmail.com"
                    className="text-[#6A1B9A]"
                  >
                    rafidislamrohit576@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <MdPhone className="text-3xl text-blue-500" />
              <div>
                <h2 className="text-xl font-semibold text-[#6A1B9A]">
                  Phone Number
                </h2>
                <p className="text-lg text-[#6A1B9A]">
                  Feel free to call me at:{" "}
                  <a href="tel:+8801646151022" className="text-[#6A1B9A]">
                    +8801646151022
                  </a>
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center space-x-4">
              <FaWhatsapp className="text-3xl text-green-500" />
              <div>
                <h2 className="text-xl text-[#6A1B9A] font-semibold">
                  WhatsApp
                </h2>
                <p className="text-lg text-[#6A1B9A]">
                  You can also message me on WhatsApp:{" "}
                  <a
                    href="https://wa.me/01761667914"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6A1B9A]"
                  >
                    +8801761667914
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <div className="lg:w-1/2">
            <h2 className="text-xl font-semibold mb-4 text-[#6A1B9A]">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4" ref={formRef}>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="input input-bordered text-black w-full mb-4"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="input input-bordered w-full mb-4 "
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="textarea textarea-bordered w-full mb-4"
                required
              />
              <button
                type="submit"
                className="btn border-[#FF5722] text-[#FF5722] font-bold  hover:bg-[#FF5722] hover:text-white transition w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ContactUs;

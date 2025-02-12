import React from "react";

const AboutUs = () => {
  return (
    <div className="mb-10 py-10 bg-[#F4F4F4] rounded-lg p-5">
      <h1 className="text-center text-[#6A1B9A] text-xl font-bold md:text-2xl lg:text-3xl">
        About Us
      </h1>
      <p className="font-bold mb-2 text-[#6A1B9A]">FAQ:</p>
      <div className="collapse collapse-arrow border-2 border-[#6A1B9A]">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium text-[#6A1B9A]">
          1. What is the purpose of this website?
        </div>
        <div className="collapse-content">
          <p className="text-[#6A1B9A]">
            Our restaurant management website is designed to streamline daily
            operations, improve customer service, and provide an all-in-one
            solution for managing reservations, menus, orders, and staff
            efficiently.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow  mt-2 border-2 border-[#6A1B9A]">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium text-[#6A1B9A]">
          2. How does the website benefit restaurant owners?
        </div>
        <div className="collapse-content">
          <p className="text-[#6A1B9A]">
            The platform helps owners track sales, manage inventory, handle
            online reservations, and analyze business performance with detailed
            reports and insights—all in one convenient place.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow mt-2 border-2 border-[#6A1B9A]">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium text-[#6A1B9A]">
          3. Can customers use this website to make reservations?
        </div>
        <div className="collapse-content">
          <p className="text-[#6A1B9A]">
            Yes, customers can easily book tables, pre-order meals, or request
            special arrangements directly through the website.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow mt-2 border-2 border-[#6A1B9A]">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium text-[#6A1B9A]">
          4. What kind of restaurants can use this platform?
        </div>
        <div className="collapse-content">
          <p className="text-[#6A1B9A]">
            Our system is suitable for all types of dining establishments,
            including fine dining, casual dining, cafés, food trucks, and
            fast-food chains.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow mt-2 border-2 border-[#6A1B9A]">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium text-[#6A1B9A]">
          5. Does the website support online ordering?
        </div>
        <div className="collapse-content">
          <p className="text-[#6A1B9A]">
            Absolutely! Customers can place orders for pickup or delivery, and
            the system ensures smooth communication with the kitchen staff.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow mt-2 border-2 border-[#6A1B9A]">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium text-[#6A1B9A]">
          6. Is the website mobile-friendly?
        </div>
        <div className="collapse-content">
          <p className="text-[#6A1B9A]">
            Yes, our website is fully optimized for both mobile and desktop
            devices, ensuring a seamless experience for users on the go.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow mt-2 border-2 border-[#6A1B9A]">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium text-[#6A1B9A]">
          7. How do I get started with this website?
        </div>
        <div className="collapse-content">
          <p className="text-[#6A1B9A]"> 
            Simply sign up, customize your restaurant’s profile, and start
            exploring the features. Our support team is available to help you
            every step of the way!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

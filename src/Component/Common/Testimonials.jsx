import React from "react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  { name: "Swapnil There", text: "ABCO Computer is a great place for learning and growth. Supportive team, professional work culture, and good guidance for building a strong career. Highly recommended for freshers and professionals." },
  { name: "Mayuri", text: "ABCO Computers is providing excellent opportunities for students to build a successful career as IT professionals in the USA. They follow a proper step-by-step strategy to help students gain knowledge of the latest technologies and secure jobs through F1 and H1-B visa support. They also offer financial assistance to deserving students for their MS studies and career growth. I strongly recommend ABCO Computers — joining them is a very good decision for your future." },
  { name: "Haritha Gangone", text: "ABCO Computers is a globally trusted IT consulting and recruitment solutions company, dedicated to building strong partnerships with businesses and professionals alike. For us, technology and talent are not separate pillars — they are the foundation of innovation and growth. We specialize in IT staffing, digital transformation, application development, and enterprise solutions across industries such as healthcare, finance, retail, and technology. By combining deep technical expertise with a people-first approach, we deliver solutions that help organizations accelerate innovation, streamline operations, and stay competitive in a rapidly changing digital world. At the same time, we are passionate about connecting skilled professionals with the right career opportunities. Whether it is helping a developer find their dream role or enabling a business to scale its workforce, we believe in creating outcomes that benefit both talent and employers. Together, we strive to create lasting value, sustainable growth, and success stories that inspire." },
  { name: "gopi krishna thati", text: "I’ve been working with this company for the past year and my experience has been genuinely positive. The team culture is friendly and collaborative, which makes daily work enjoyable. Overall, it’s a great place for anyone looking to build their career" },
  { name: "Nikhilsingh Patel", text: "ABCO Computers Inc. (USA) and ABCO Computers Pvt. Ltd. (India) have built a reputation as forward-thinking tech partners with global reach and deep local roots. With operations across the U.S. and Indian cities like Noida, Nashik, Nagpur, and Nizamabad, ABCO delivers more than just software solutions — it delivers real-world value. Their strength lies in a unique combination of IT services and U.S. recruitment expertise, consistently connecting skilled talent with the right opportunities. What truly sets ABCO apart is its people-first culture, where leadership is supportive, innovation is encouraged, and careers are built with purpose. It’s not just a company — it’s a community where ideas thrive, progress is shared, and every step of the journey is embraced with enthusiasm and pride. Proud to be part of a place where passion and progress go hand in hand." },
  { name: "orange electronics", text: "ABCO Computers Private Limited stands out as a dynamic and forward-looking company in the IT and computer solutions space. Under the leadership of Mr. Ashwin Ashok Kulkarni, the company has built a reputation for professionalism, strong business ethics, and customer-centric service. Their management team brings deep expertise, ensuring smooth operations and continuous growth. ABCO is not only focused on computer sales but is also expanding strategically into IT services, digital marketing, and advanced technology solutions, which reflects their vision of becoming a full-scale tech solutions provider. The company’s infrastructure and operational efficiency demonstrate a solid foundation for future expansion. With a strong banking profile, transparent financial practices, and consistent client satisfaction, ABCO Computers Pvt. Ltd. is undoubtedly a trusted name for both customers and business partners. I strongly recommend ABCO Computers Private Limited for anyone seeking reliable technology solutions with long-term value creation. Abhishek Gupta Orange electronics" },
  { name: "Sanjana Shah", text: "Outstanding service by ABCO Computers! Super fast support, expert guidance, and excellent product quality. The team is professional, reliable, and always ready to help. Truly impressed with their service standards highly recommended." },
  { name: "Swapna Rani Neeli", text: "ABCO Computers has been giving better opportunities to get success as an IT employees at USA. They are implementing with proper step by step strategy to get knowledge on technologies and job through F1 and H1-B visa. And giving financial support for the needful students for MS and job. I suggest you that very good thought if you join with ABCO." },
  { name: "abhishek gupta", text: "I had a great experience with ABCO Computers Their software solutions are reliable, user-friendly, and tailored to business needs. The team is highly professional, supportive, and always quick to respond to queries. Thanks to vibha ji" },
  { name: "Kapil Dubey", text: "Reliable and professional team with great technical expertise. Highly recommend for IT solutions and support." },
  { name: "Abco Richhi", text: "Glad to be part of ABCO COMPUTERS PVT LTD Best place to start your career as fresher. Great environment and helpful colleagues." },
  { name: "S singh", text: "It is a very good experience working with Abco computers.. They are highly recommended software company.. Ar.Sudesh Singh" },
  { name: "Rashmi Chandak", text: "Very good company to work with. Good people and Good Team in India and in USA too." },
  { name: "Rahul Limje", text: "Very good skill with knowledge teachers." },
  { name: "srujana abco", text: "I had an amazing experience with this company and good environment." },
  { name: "HITEK PLACEMENT SERVICES", text: "One of the best IT firm in Nagpur" },
  { name: "Sawan Ramsajiwan Mourya", text: "Better Services to US recruiters" },
  { name: "Shubham Behuniya", text: "Nice place to co working" },
  { name: "Chand sheikh", text: "Good experience" },
  { name: "Junaid Ali", text: "Best best best" },
  { name: "Juber Pathan", text: "Good services and poc support" },
];

const loopData = [...testimonials, ...testimonials];

const Card = ({ name, text }) => (
  <article className="mr-6 flex min-h-[220px] w-[285px] flex-shrink-0 flex-col justify-between rounded-[20px] border border-white/10 bg-[#0b1220] p-5 sm:w-[340px] lift-card">
    <p className="line-clamp-6 text-[12px] leading-5 text-gray-300">“{text}”</p>

    <div className="mt-5 flex items-center gap-3">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-cyan-400 to-cyan-700 text-base font-semibold text-white" aria-hidden="true">
        {name.trim().charAt(0).toUpperCase()}
      </div>

      <div>
        <h4 className="text-[13px] text-white">{name}</h4>
        <p className="text-[11px] text-gray-400">5-Star Review</p>
        <div className="text-[12px] text-yellow-400" aria-label="5 out of 5 stars">★★★★★</div>
      </div>
    </div>
  </article>
);

const Testimonials = () => (
  <div className="flex w-full justify-center bg-[#060B14] px-4 py-20">
    <div className="relative w-full overflow-hidden">
      <ScrollReveal className="mx-auto max-w-6xl text-center">
        <div className="premium-glass mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-gray-300 shadow-sm backdrop-blur-md">Testimonials</div>
        <h2 className="bg-[linear-gradient(90deg,_#FFFFFF_0.3%,_#2BD7D7_60%)] bg-clip-text text-[26px] font-medium leading-tight text-transparent sm:text-[34px] md:text-[42px]">HERE IS WHAT OUR CLIENTS HAVE TO SAY</h2>
      </ScrollReveal>

      <ScrollReveal delay={160} className="mt-12">
        <div className="overflow-hidden">
          <div className="marquee-left">
            {loopData.map((item, index) => <Card key={`${item.name}-left-${index}`} {...item} />)}
          </div>
        </div>
        <div className="mt-6 overflow-hidden">
          <div className="marquee-right">
            {loopData.map((item, index) => <Card key={`${item.name}-right-${index}`} {...item} />)}
          </div>
        </div>
      </ScrollReveal>

      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-12 bg-gradient-to-r from-[#060B14] to-transparent sm:w-[140px] md:w-[180px]" />
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-12 bg-gradient-to-l from-[#060B14] to-transparent sm:w-[140px] md:w-[180px]" />
    </div>
  </div>
);

export default Testimonials;

import React from "react";

const DepartmentContent = () => {
    return (
        <section className="flex-1">


            <img
                className="w-full rounded-md mb-6"
                src="https://www.nsec.ac.in/images/gallery/cse/about_2025_01.jpg"
                alt="Department Group"
            />


            <div className="mb-8">

                <h2 className="text-xl  mb-4  pb-2">
                    <strong>About The Department</strong>
                </h2>

                <div className="space-y-5 text-[15px] text-gray-700 leading-relaxed">

                    <p>
                        The Department of Computer Science and Engineering at Netaji
                        Subhash Engineering College was established in 1998 and is a
                        well-known center for academic excellence. With expert faculty,
                        state-of-the-art infrastructure, and a strong industry orientation,
                        the department empowers students with the skills and adaptability
                        required to excel in rapidly evolving domains such as Artificial
                        Intelligence, Data Science, Cyber Security, and Quantum Computing.
                    </p>

                    <p>
                        Accredited by the National Board of Accreditation (NBA), the
                        department upholds high academic standards and delivers a
                        transformative educational experience that blends foundational
                        theory with cutting-edge applications.
                    </p>

                    <p>
                        The department promotes a research-focused and industry-connected
                        environment, encouraging students to publish their work and take
                        part in various project competitions, hackathons, and student
                  mb-8"      chapters such as IEEE CS, CIS, and RAS.
                    </p>

                    <p>
                        Our strong placement record—with students securing positions in
                        leading global companies like Amazon, Accenture, Dell Technologies,
                        Virtusa, Cognizant, and TCS—demonstrates the department's
                        commitment to developing graduates with both research capabilities
                        and industry readiness.
                    </p>

                    <p>
                        Now celebrating a legacy of 27 years, the department continues to
                        thrive with the support of a vibrant alumni network whose members
                        actively contribute to the department’s growth and innovation.
                    </p>

                </div>
            </div>


            <div >
                <img
                    src="https://www.nsec.ac.in/images/gallery/cse/frontpage-2025-fac.jpeg"
                    alt="Faculty Members"
                    className=" w-full rounded-md shadow-sm "
                />
            </div>


            <div className="mb-10">

                <h2 className="text-2xl  mb-4  pb-2">
                    <strong>Why Choose Us?</strong>
                </h2>

                <div className="space-y-4 text-[15px] text-gray-700 leading-relaxed">

                    <p>
                        <strong>NBA Accreditation:</strong> A hallmark of excellence,
                        ensuring a robust academic framework and adherence to global
                        quality standards.
                    </p>

                    <p>
                        <strong>Comprehensive Curriculum:</strong> Designed to align with
                        emerging technological trends and industry requirements.
                    </p>

                    <p>
                        <strong>World-Class Infrastructure:</strong> Advanced laboratories
                        and computing facilities equipped with state-of-the-art tools and
                        technologies.
                    </p>

                    <p>
                        <strong>Eminent Faculty:</strong> A team of highly qualified
                        academicians and researchers dedicated to student success.
                    </p>

                    <p>
                        <strong>Research Excellence:</strong> Active engagement in
                        pioneering research areas such as AI, ML, IoT, Cyber Security, and
                        Big Data Analytics.
                    </p>

                    <p>
                        <strong>Placement Success:</strong> Proven track record of student
                        placements in leading global organizations and innovative startups.
                    </p>

                </div>
            </div>


            <div className="mt-10">

                <h2 className="text-[18px]   mb-5  pb-2">
                    <strong>Message from the Head of the Department</strong>
                </h2>

                <div className="text-[15px] text-gray-700 leading-9">

                    <img
                        src="https://www.nsec.ac.in/images/gallery/cse/cse-hod-2025.jpg"
                        alt="HOD CSE"
                        className="
        w-[50%]
        float-right
        ml-6
        mb-4
        border
        border-gray-300
        shadow-md
      "
                    />

                    <p className="mb-5">
                        Welcome to the Department of Computer Science & Engineering at
                        Netaji Subhash Engineering College. It is an honor to lead a
                        department that has consistently demonstrated a commitment to
                        academic excellence, innovation, and professional growth.
                    </p>

                    <p className="mb-5">
                        At the CSE department, we believe in shaping not just engineers
                        but thought leaders and innovators who can adapt to and lead in a
                        rapidly changing technological environment. Our curriculum is
                        crafted to provide a strong theoretical foundation coupled with
                        hands-on learning experiences, ensuring our graduates are
                        industry-ready and research-capable.
                    </p>

                    <p className="mb-5">
                        While we continue to refine and innovate our teaching
                        methodologies, we also actively promote interdisciplinary research
                        and entrepreneurial ventures. Our students are encouraged to
                        challenge conventions, explore new frontiers, and contribute
                        meaningfully to solving real-world problems.
                    </p>

                    <p className="mb-8">
                        Through our robust placement programs, industry collaborations,
                        and alumni network, we aim to provide our students with
                        unparalleled opportunities to achieve their aspirations. I invite
                        you to explore what makes our department a vibrant community of
                        learning, discovery, and impact.
                    </p>


                    <div className="leading-8 text-[15px]">

                        <p className="font-bold ">
                            Dr. Piyali Chatterjee
                        </p>

                        <p >Professor & HOD</p>

                        <p>
                            Department of Computer Science & Engineering
                        </p>

                        <p>
                            Netaji Subhash Engineering College
                        </p>

                        <p>
                            Techno City, Panchpota, Garia
                        </p>

                        <p>
                            Kolkata 700152
                        </p>

                        <p>
                            West Bengal, India
                        </p>

                        <p>
                            Tel.: 03324361285
                        </p>

                        <p>
                            Email: hod.cse@nsec.ac.in
                        </p>

                    </div>

                </div>
            </div>

        </section>
    );
};

export default DepartmentContent;
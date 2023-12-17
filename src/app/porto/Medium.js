import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";

import MediumImg from "../../../public/img/medium_img.png"

export default function Medium({ closeArticle }) {
    return (
        <div>

            <div className="pb-4 pl-4 mb-4 border-b border-slate-400 text-lg font-semibold flex justify-between items-center" >
                <Link href="https://medium.com/@rafifajrulariyadi"> Medium.com/@rafifajrulariyadi </Link>
                <AiOutlineClose className="text-3xl cursor-pointer" onClick={closeArticle} />
            </div>

            <div className=" flex justify-center" >
                <Image src={MediumImg} alt="medium profile img" className="rounded-lg " />
            </div>


            <div className="my-4 py-4 border-t border-slate-400 text-justify">

                Welcome to my personal blog on Medium, where we will explore the world of technology,
                particularly in the realms of programming and software development. The primary goal
                of this blog is simple: to share knowledge in a casual and informative manner.
                <br />  <br />

                <span className="font-semibold text-lg"> Topic and Focus: </span>  <br />

                This blog will center around various aspects of technology, with a special emphasis on
                programming and software development. I will share perspectives, experiences, and insights
                into the coding and software development world.
                <br /> <br />

                <span className="font-semibold text-lg"> Writing Style:</span> <br />

                With an approach that is both casual and informative, I aim to ensure readers feel
                comfortable while still gaining a solid understanding of the topics discussed. Let's make
                learning about technology an enjoyable experience.
                <br /> <br />

                <span className="font-semibold text-lg"> Posting Frequency: </span> <br />

                While there is no fixed schedule, you can expect an increase in posting frequency in the
                future. This blog will grow over time, and I plan to share more content as ideas and
                interesting projects develop.
                <br /> <br />

                <span className="font-semibold text-lg"> Interaction: </span> <br />

                Although no direct interaction is planned, I greatly appreciate any responses and comments
                from readers. If there are questions or discussions that arise, I will be happy to interact
                and share more.
                <br /> <br />

                <span className="font-semibold text-lg"> Platform: </span> <br />

                Currently, there are no specific plans regarding the platform.
                The blog will remain simple and focused on its own content on Medium.
                <br /> <br />

                <span className="font-semibold text-lg"> Success Metrics: </span> <br />

                In terms of success metrics, my primary focus is on the process of sharing knowledge
                and experiences. While there are no specific metrics, each reader who finds value in
                my writing is a success for me.
                <br /> <br />

                <span className="font-semibold text-lg"> Future Projection: </span> <br />

                I plan to increase posting frequency in the future, providing more useful and engaging content.
                Updates and the expansion of topics will also be part of the blog's evolution over time.
                <br /> <br />

                Thank you for joining this journey, and I hope you find inspiration and valuable knowledge in each post.
                Let's explore the world of technology together!
                <br /> <br />


            </div>

        </div>
    )
}

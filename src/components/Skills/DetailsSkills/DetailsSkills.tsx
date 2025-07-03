import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import BootstrapImage from "../../../../public/assets/tech/Bootstrap.png";
import canvaImage from "../../../../public/assets/tech/canva.png";
import cssImage from "../../../../public/assets/tech/css.png";
import expressImage from "../../../../public/assets/tech/express.png";
import figmaImage from "../../../../public/assets/tech/figma.png";
import firebaseImage from "../../../../public/assets/tech/firebase.png";
import githubImage from "../../../../public/assets/tech/github.png";
import htmlImage from "../../../../public/assets/tech/html.png";
import javascriptImage from "../../../../public/assets/tech/javascript.png";
import mongodbImage from "../../../../public/assets/tech/mongodb.png";
import nextjsImage from "../../../../public/assets/tech/nextjs.png";
import nodeImage from "../../../../public/assets/tech/node.png";
import photoshopImage from "../../../../public/assets/tech/photoshop.png";
import postmanImage from "../../../../public/assets/tech/postman.png";
import reactImage from "../../../../public/assets/tech/react.png";
import vscodeImage from "../../../../public/assets/tech/vscode.png";

export default function DetailsSkills() {
  return (
    <div className="pt-10">
      <Marquee pauseOnHover={true}>
        {/* bootstrap */}
        <Tooltip>
          <TooltipTrigger>
            <Image
              className="w-[80px]"
              width={200}
              height={200}
              src={BootstrapImage}
              alt="Bootstrap"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>Bootstrap</p>
          </TooltipContent>
        </Tooltip>

        {/* canva */}
        <Tooltip>
          <TooltipTrigger>
            <Image
              className="w-[80px]"
              width={200}
              height={200}
              src={canvaImage}
              alt="canva"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>Canva</p>
          </TooltipContent>
        </Tooltip>

        {/* css */}
        <Tooltip>
          <TooltipTrigger>
            {" "}
            <Image
              className="w-[80px]"
              width={200}
              height={200}
              src={cssImage}
              alt="css"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>CSS 3</p>
          </TooltipContent>
        </Tooltip>

        {/* express */}
        <Tooltip>
          <TooltipTrigger>
            <Image
              className="w-[80px]"
              width={200}
              height={200}
              src={expressImage}
              alt="express"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>Express Js</p>
          </TooltipContent>
        </Tooltip>

        {/* figma */}
        <Tooltip>
          <TooltipTrigger>
            <Image
              className="w-[80px]"
              width={200}
              height={200}
              src={figmaImage}
              alt="figma"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>Figma</p>
          </TooltipContent>
        </Tooltip>

        {/* firebase */}
        <Tooltip>
          <TooltipTrigger>
            <Image
              className="w-[80px]"
              width={200}
              height={200}
              src={firebaseImage}
              alt="firebase"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>Firebase</p>
          </TooltipContent>
        </Tooltip>

        {/* github */}
        <Tooltip>
          <TooltipTrigger>
            <Image
              className="w-[80px]"
              width={200}
              height={200}
              src={githubImage}
              alt="github"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>Github</p>
          </TooltipContent>
        </Tooltip>

        {/* html */}
        <Tooltip>
          <TooltipTrigger>
            <Image
              className="w-[80px]"
              width={200}
              height={200}
              src={htmlImage}
              alt="html"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>HTML 5</p>
          </TooltipContent>
        </Tooltip>

        {/* Javascript */}
        <Tooltip>
          <TooltipTrigger>
            <Image
              className="w-[80px]"
              width={200}
              height={200}
              src={javascriptImage}
              alt="javaScript"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>JavaScript</p>
          </TooltipContent>
        </Tooltip>

        {/* postman */}
        <Tooltip>
          <TooltipTrigger>
            <Image
              className="w-[70px]"
              width={100}
              height={100}
              src={postmanImage}
              alt="vs Code"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>Postman</p>
          </TooltipContent>
        </Tooltip>

        {/* mongodb */}
        <Tooltip>
          <TooltipTrigger>
            <Image
              className="w-[80px]"
              width={200}
              height={200}
              src={mongodbImage}
              alt="mongoDB"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>MongoDB</p>
          </TooltipContent>
        </Tooltip>

        {/* nextjs */}
        <Tooltip>
          <TooltipTrigger>
            {" "}
            <Image
              className="w-[80px]"
              width={200}
              height={200}
              src={nextjsImage}
              alt="nextJs"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>Next Js</p>
          </TooltipContent>
        </Tooltip>

        {/* nodejs */}
        <Tooltip>
          <TooltipTrigger>
            <Image
              className="w-[80px]"
              width={200}
              height={200}
              src={nodeImage}
              alt="nodeJs"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>Node Js</p>
          </TooltipContent>
        </Tooltip>

        {/* photoshop */}
        <Tooltip>
          <TooltipTrigger>
            <Image
              className="w-[80px]"
              width={200}
              height={200}
              src={photoshopImage}
              alt="photoshop"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>Adobe Photoshop</p>
          </TooltipContent>
        </Tooltip>

        {/* reactJs */}
        <Tooltip>
          <TooltipTrigger>
            <Image
              className="w-[80px]"
              width={200}
              height={200}
              src={reactImage}
              alt="reactJs"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>React Js</p>
          </TooltipContent>
        </Tooltip>

        {/* vs code */}
        <Tooltip>
          <TooltipTrigger>
            <Image
              className="w-[80px]"
              width={200}
              height={200}
              src={vscodeImage}
              alt="vs Code"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>Vs Code</p>
          </TooltipContent>
        </Tooltip>
      </Marquee>
    </div>
  );
}

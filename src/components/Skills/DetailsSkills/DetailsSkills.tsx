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
import reactImage from "../../../../public/assets/tech/react.png";
import vscodeImage from "../../../../public/assets/tech/vscode.png";

export default function DetailsSkills() {
  return (
    <div className="pt-10">
      <Marquee className="px-20" pauseOnHover={true} speed={70}>
        <Image
          className="w-[80px]"
          width={200}
          height={200}
          src={BootstrapImage}
          alt="Bootstrap"
        />
        <Image
          className="w-[80px]"
          width={200}
          height={200}
          src={canvaImage}
          alt="canva"
        />
        <Image
          className="w-[80px]"
          width={200}
          height={200}
          src={cssImage}
          alt="css"
        />
        <Image
          className="w-[80px]"
          width={200}
          height={200}
          src={expressImage}
          alt="express"
        />
        <Image
          className="w-[80px]"
          width={200}
          height={200}
          src={figmaImage}
          alt="figma"
        />
        <Image
          className="w-[80px]"
          width={200}
          height={200}
          src={firebaseImage}
          alt="firebase"
        />
        <Image
          className="w-[80px]"
          width={200}
          height={200}
          src={githubImage}
          alt="github"
        />
        <Image
          className="w-[80px]"
          width={200}
          height={200}
          src={htmlImage}
          alt="html"
        />
        <Image
          className="w-[80px]"
          width={200}
          height={200}
          src={javascriptImage}
          alt="javaScript"
        />
        <Image
          className="w-[80px]"
          width={200}
          height={200}
          src={mongodbImage}
          alt="mongoDB"
        />
        <Image
          className="w-[80px]"
          width={200}
          height={200}
          src={nextjsImage}
          alt="nextJs"
        />
        <Image
          className="w-[80px]"
          width={200}
          height={200}
          src={nodeImage}
          alt="nodeJs"
        />
        <Image
          className="w-[80px]"
          width={200}
          height={200}
          src={photoshopImage}
          alt="photoshop"
        />
        <Image
          className="w-[80px]"
          width={200}
          height={200}
          src={reactImage}
          alt="reactJs"
        />
        <Image
          className="w-[80px]"
          width={200}
          height={200}
          src={vscodeImage}
          alt="vs Code"
        />
      </Marquee>
    </div>
  );
}

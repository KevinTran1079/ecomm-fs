import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
  return (
    <div className = "p-4">
      <div className = "flex flex-col gap-y-4">
        <div>
          <Button variant = "elevated">
            I am a button.
          </Button>
        </div>
        <div>
          <Input placeholder = "I am a placeholder"/>
        </div>
        <div>
          <Progress value={50} />
        </div>

        <div>
          <Textarea value = "Text area" />
        </div>

        <div>
          <Checkbox value = "Box "/>
        </div>
      </div>
      </div>
  );
}

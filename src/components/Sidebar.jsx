import React, { useState, useContext } from "react";
import { Button } from "./ui/button";
import { Copy, RotateCcw } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { TextContext } from "@/context/TextContext";
import { textHandler } from "@/utils/textHandler";
import { handleAITransform } from "@/hooks/handleAiTransform";
import {
  checkGrammar,
  toCasual,
  toFormal,
  toCreative,
  summarizeText,
  toProfessional,
  toFriendly,
  toPersuasive,
} from "@/hooks/useAi";

export default function Sidebar() {
  const [position, setPosition] = useState("formal");
  const { text, setText, resetText, setLoading, loading } =
    useContext(TextContext);

  const handleDropdownChange = (value) => {
    setPosition(value);

    if (value === "casual") {
      handleAITransform(toCasual, text, setText, setLoading, loading);
    } else if (value === "formal") {
      handleAITransform(toFormal, text, setText, setLoading, loading);
    } else if (value === "creative") {
      handleAITransform(toCreative, text, setText, setLoading, loading);
    } else if (value === "professional") {
      handleAITransform(toProfessional, text, setText, setLoading, loading);
    } else if (value === "friendly") {
      handleAITransform(toFriendly, text, setText, setLoading, loading);
    } else if (value === "persuasive") {
      handleAITransform(toPersuasive, text, setText, setLoading, loading);
    }
  };

  return (
    <>
      <div className="p-3 border-2 rounded-[6px] border-white-200">
        <div className="flex flex-col gap-y-2">
          <div>
            <h2 className="text-[20px]">Utilities</h2>
          </div>
          <div className="flex flex-col gap-y-1">
            <h3 className="text-sm">Casing</h3>
            <div className="flex gap-x-5">
              <div className="flex flex-wrap gap-1 border-2 rounded-[10px]">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className="cursor-pointer"
                        variant="ghost"
                        onClick={() => setText(textHandler(text, "toTitle"))}
                      >
                        Aa
                      </Button>
                    </TooltipTrigger>

                    <TooltipContent>
                      <p>Title Case</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className="cursor-pointer"
                        variant="ghost"
                        onClick={() => setText(textHandler(text, "toLower"))}
                      >
                        aa
                      </Button>
                    </TooltipTrigger>

                    <TooltipContent>
                      <p>Lowercase</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className="cursor-pointer"
                        variant="ghost"
                        onClick={() => setText(textHandler(text, "toUpper"))}
                      >
                        AA
                      </Button>
                    </TooltipTrigger>

                    <TooltipContent>
                      <p>Uppercase</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className="cursor-pointer"
                        variant="ghost"
                        onClick={() => setText(textHandler(text, "toSentence"))}
                      >
                        Abc
                      </Button>
                    </TooltipTrigger>

                    <TooltipContent>
                      <p>Sentence Case</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex flex-row flex-wrap gap-1 border-2 rounded-[10px]">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className="cursor-pointer"
                        variant="ghost"
                        onClick={() => setText(textHandler(text, "toCopy"))}
                      >
                        <Copy />
                      </Button>
                    </TooltipTrigger>

                    <TooltipContent>
                      <p>Copy Text</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className="cursor-pointer"
                        variant="ghost"
                        onClick={() => resetText("")}
                      >
                        <RotateCcw />
                      </Button>
                    </TooltipTrigger>

                    <TooltipContent>
                      <p>Reset Text</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-[20px]">Magic 🪄</h2>
          </div>
          <div className="flex  flex-wrap gap-y-2 gap-x-5">
            <div>
              <Button
                className="cursor-pointer"
                variant="secondary"
                onClick={() =>
                  handleAITransform(checkGrammar, text, setText, setLoading)
                } // Now set the actual text
              >
                Grammar Check ✅
              </Button>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="cursor-pointer" variant="outline">
                    Say It Cooler 😎
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuRadioGroup
                    value={position}
                    onValueChange={handleDropdownChange}
                  >
                    <DropdownMenuRadioItem value="casual">
                      Casual
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="formal">
                      Formal
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="creative">
                      Creative
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="flex p-3 mt-5 border-2 rounded-[6px] flex-wrap gap-2">
            <Button
              className="cursor-pointer"
              onClick={() => handleAITransform(summarizeText, text, setText)}
            >
              Gimme the TL;DR
            </Button>
            <p className="text-[14px] text-[#738196] self-center">
              "Skip to the good part." 🎶
            </p>
          </div>
          <div className="mt-3">
            <h2 className="text-[20px]">Having Mood Swings? 😼</h2>
          </div>
          <div className="mt-2">
            <RadioGroup
              defaultValue="friendly"
              onValueChange={handleDropdownChange}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="professional" id="r1" />
                <Label htmlFor="professional">Professional</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="friendly" id="r2" />
                <Label htmlFor="friendly">Friendly</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="persuasive" id="r3" />
                <Label htmlFor="persuasive">Persuasive</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="mt-3">
            <h2 className="text-[20px]">Key Snatcher 🐈‍⬛</h2>
            <Button className="cursor-pointer mt-2" variant="secondary">
              Extract Keywords ✅
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

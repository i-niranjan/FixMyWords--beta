import React, { useContext } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton"; // Make sure to import Skeleton component
import { useEffect } from "react";
// Make sure to import Skeleton component
import { TextContext } from "@/context/TextContext";

export default function TextArea() {
  const { text, setText, loading, setLoading } = useContext(TextContext); // Assuming loading is part of the context

  return (
    <>
      <div className="flex flex-col gap-y-5">
        {loading ? (
          <Skeleton className="w-full h-20 mt-4 rounded-md" />
        ) : (
          <Textarea
            id="textArea"
            className="h-[400px]"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type your message here."
          />
        )}
      </div>
    </>
  );
}

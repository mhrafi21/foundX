import { Input } from "@nextui-org/input";
import React from "react";

const Landing = () => {
  return (
    <div>
      <h2>Form</h2>
      <div>
        <form>
          <Input
            aria-label="email"
            type="email"
            label="Email"
            placeholder="junior@nextui.org"
            className="max-w-xs"
          />
        </form>
      </div>
    </div>
  );
};

export default Landing;

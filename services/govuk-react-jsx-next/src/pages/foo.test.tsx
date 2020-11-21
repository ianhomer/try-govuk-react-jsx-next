import React from "react";
import renderer from "react-test-renderer";
import Foo from "./foo";

it("renders OK", () => {
  const { children } = renderer.create(<Foo />).toJSON();
  expect(children[0]).toBe("foo");
});

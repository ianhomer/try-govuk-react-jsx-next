import React from "react";
import renderer from "react-test-renderer";
import Foo from "../../src/pages/foo";

it("renders OK", () => {
  const nodes = renderer.create(<Foo />).toJSON();
  expect(nodes[0].children[0]).toBe("foo");
  expect(nodes[1].children[0]).toBe("bar");
});

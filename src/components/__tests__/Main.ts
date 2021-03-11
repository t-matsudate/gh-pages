import React from "react";
import renderer from "react-test-renderer";

import Main from "../Main";

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
        .create(<Main>Hello world!</Main>)
        .toJSON();
    expect(tree).toMatchSnapshot({props: {children: 'Hello world!'}});
  });
});

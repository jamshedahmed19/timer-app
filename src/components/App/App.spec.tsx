import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Timer from "../Timer/Timer";

describe("App Components renders", () => {
  const container = shallow(<App />);

  test("should render a div", () => {
    expect(container.find("div").length).toEqual(1);
  });

  test('should render Timer component', () => {
      expect(container.containsMatchingElement(<Timer />)).toEqual(true);
  })
});
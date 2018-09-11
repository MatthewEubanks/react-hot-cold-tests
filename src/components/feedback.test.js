import React from "react";
import { shallow } from "enzyme";

import Feedback from "./feedback";

describe("< Feedback/>", () => {
  it("renders without crashing", () => {
    shallow(<Feedback />);
  });
});

it('Renders some feedback', () => {
  let TEST_FEEDBACK = 'You are listening to a game!';

  let wrapper = shallow(<Feedback feedback={TEST_FEEDBACK} />);
});


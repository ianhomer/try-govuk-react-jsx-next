// Test set up

import { configure } from "enzyme";
import ReactSeventeenAdapter from "@wojtekmaj/enzyme-adapter-react-17";
//import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new ReactSeventeenAdapter() });

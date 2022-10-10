import { render } from "@testing-library/react";
import { Star } from "./Star";
test("renders an h1", () => {
    const {getTextBy} = render (<Star/>);
    const h1 = getTextBy(/Cool Star/);
    expect(h1).toHaveTextContent("Cool Star");
});
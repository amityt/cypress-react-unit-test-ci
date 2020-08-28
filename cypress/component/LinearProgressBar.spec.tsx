/// <reference types="Cypress" />
import React from "react";
import { mount } from "cypress-react-unit-test";
import LinearProgressBar from "../../src/components/ProgressBar/LinearProgressBar";

describe("Linear Progressbar Testing", () => {
	it("Progressbar stroke for value 2", () => {
		mount(<LinearProgressBar value={2} />);
		cy.get(".rc-progress-line-path").should(
			"have.css",
			"stroke-dasharray",
			"20px, 100px"
		);
	});
	it("Progressbar stroke for value 8", () => {
		mount(<LinearProgressBar value={8} />);
		cy.get(".rc-progress-line-path").should(
			"have.css",
			"stroke-dasharray",
			"80px, 100px"
		);
		cy.get(".rc-progress-line-path").should("have.attr", "stroke", "#109B67");
	});
	it("Progressbar stroke for value 6", () => {
		mount(<LinearProgressBar value={6} />);
		cy.get(".rc-progress-line-path").should(
			"have.css",
			"stroke-dasharray",
			"60px, 100px"
		);
		cy.get(".rc-progress-line-path").should("have.attr", "stroke", "#F6B92B");
	});
	it("Progressbar stroke if default", () => {
		mount(<LinearProgressBar value={8} isDefault />);
		cy.get(".rc-progress-line-path").should(
			"have.css",
			"stroke-dasharray",
			"80px, 100px"
		);
	});
});

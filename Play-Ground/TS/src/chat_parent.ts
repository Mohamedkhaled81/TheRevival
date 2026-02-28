// Parent.ts

/**
 * We import the interface using ES Module syntax.
 * Since interfaces are removed during compilation,
 * we use the `type` keyword to tell TypeScript this
 * is only used for type checking.
 */
import type { IParent } from "../Interfaces/IParent";

/**
 * The Parent class implements the IParent interface.
 * This means it MUST contain all properties defined in IParent.
 */
export class Parent implements IParent {

  // Required because the interface defines it
  name: string;

  /**
   * Constructor initializes the name property
   */
  constructor(name: string) {
    this.name = name;
  }
}
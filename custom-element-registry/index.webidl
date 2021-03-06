[Exposed=Window]
interface CustomElementRegistry {

  [CEReactions] void define(DOMString name, Function constructor, optional ElementDefinitionOptions options);

  any get(DOMString name);

  Promise<void> whenDefined(DOMString name);
};

dictionary ElementDefinitionOptions {
  DOMString extends;
};

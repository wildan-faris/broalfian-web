import {
  __commonJS
} from "./chunk-CEQRFMJQ.js";

// node_modules/react-slugify/dist/slugify.js
var require_slugify = __commonJS({
  "node_modules/react-slugify/dist/slugify.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var stripAccents = (input) => {
      const accents = "ÀÁÂÃÄÅĄĀàáâãäåąāÒÓÔÕÕÖØòóôõöøÈÉÊËĘĒèéêëðęēÇĆČçćčÐÌÍÎÏĪìíîïīÙÚÛÜŪùúûüūÑŅñņŠŚšśŸÿýŽŹŻžźżŁĻłļŃŅńņàáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîüûñçýỳỹỵỷğışĞİŞĢģĶķ";
      const fixes = "AAAAAAAAaaaaaaaaOOOOOOOooooooEEEEEEeeeeeeeCCCcccDIIIIIiiiiiUUUUUuuuuuNNnnSSssYyyZZZzzzLLllNNnnaaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiuuncyyyyygisGISGgKk";
      const split = accents.split("").join("|");
      const reg = new RegExp(`(${split})`, "g");
      function replacement(a) {
        return fixes[accents.indexOf(a)] || "";
      }
      return input.replace(reg, replacement);
    };
    var getSafeRegexpString = (input) => input.split("").map((char) => `\\${char}`).join("");
    var harmonize = (input, delimiter, ignoreInvalid = false) => {
      const harmonized = stripAccents(input).trim().toLowerCase();
      const safeDelimiter = getSafeRegexpString(delimiter);
      if (ignoreInvalid) {
        return harmonized.replace(/\s+/g, delimiter);
      }
      return harmonized.replace(new RegExp(`[^a-z0-9${safeDelimiter}]+`, "g"), delimiter).replace(new RegExp(`${safeDelimiter}+`, "g"), delimiter).replace(new RegExp(`^${safeDelimiter}`, "g"), "").replace(new RegExp(`${safeDelimiter}$`, "g"), "");
    };
    var slugify = (node, options = { delimiter: "-", prefix: "" }) => {
      if (!options.delimiter)
        options.delimiter = "-";
      if (!options.prefix)
        options.prefix = "";
      if (!node || typeof node === "boolean") {
        return "";
      }
      const { delimiter, prefix } = options;
      if (typeof node === "boolean") {
        return "";
      }
      if (typeof node === "string" || typeof node === "number") {
        const harmonizedPrefix = harmonize(prefix, delimiter, true);
        const harmonizedNode = harmonize(String(node), delimiter);
        if (harmonizedPrefix) {
          return `${harmonizedPrefix}${delimiter}${harmonizedNode}`;
        }
        return harmonizedNode;
      }
      if ("children" in node) {
        return slugify(node.children);
      }
      if ("type" in node)
        return slugify(node.props.children, options);
      if (Symbol.iterator in node) {
        return slugify(Array.from(node).map((subNode) => slugify(subNode, { delimiter })).join(delimiter), options);
      }
      return "";
    };
    exports.default = slugify;
  }
});
export default require_slugify();
//# sourceMappingURL=react-slugify.js.map

function replaceEnv(template, env = process.env) {
  if (!template || typeof template != "string") {
    return template
  };

  const keys = Object.keys(env);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    let val = env[key];

    template = template
      .replace(new RegExp(`\\$${key}`, "g"), val)
      .replace(new RegExp(`\\$\{${key}}`, "g"), val);
  }

  return template;
}

module.exports = replaceEnv;

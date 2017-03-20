// shared stuff between the preview method and the publication should go here
DeepDiff = Npm.require('deep-diff');
JsonPath = Npm.require('jsonpath');

REST2DDP = {
  configs: []
};

// nasty function that modifies the objects that are passed in
replaceVarInConfig = function (config, variables) {
  if (variables) {
    let replacedConfig = {};
    let varString='?';
    for (var key of Object.keys(config)) {
      replacedConfig[key] = config[key];
      if (key === 'restUrl') {
        for (var varName of Object.keys(variables)) {
          if(varString!='?')
            varString+='&';
          varString+=varName+'='+variables[varName];
          //replacedConfig[key]+=varName+'='+variables[varName];
          //replacedConfig[key]=replacedConfig[key].replace(varName+"=${" + varName + "}", varName+"="+variables[varName]);
          //console.log(varString);
        }
        replacedConfig[key]+=varString;
      }
    }
    return replacedConfig;
  } else {
    return config;
  }
};

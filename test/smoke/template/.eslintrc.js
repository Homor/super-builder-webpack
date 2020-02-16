module.exports={
    "parser":"babel-eslint",
    "env":{
        "browser":true,
        "node":true
    },
    "extends":["airbnb"],
    "rules":{
        "semi":"error",
        "indent": 0,
        'strict': 0,
        "quotes":0,
        "prefer-rest-params":0,
        "no-console": 1,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        "import/no-extraneous-dependencies":0
    }
}
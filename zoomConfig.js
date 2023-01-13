const env = "development" || "production"

const config = {
    development: {
        APIKey: "WB_fbSkPQHS2tNfl6blenw",
        APISecret: "S4Xuwh8PBvQCNAsofgfZ9E1SmT4ymzuZBTMq",
    },
    production: {
        APIKey: "WB_fbSkPQHS2tNfl6blenw",
        APISecret: "S4Xuwh8PBvQCNAsofgfZ9E1SmT4ymzuZBTMq"
    }
}

module.exports = config[env]
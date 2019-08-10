function NumberStrategy() {
    this.name = "NumberStrategy";

    this.positiveInteger = (subject) => {
        return Number.isInteger(subject) && subject > 0 ? null : 'non positive integer';
    }

    this.lessThan100 = (subject) => {
        return subject < 100 ? null : 'less than 100';
    }

}

module.exports = new NumberStrategy()
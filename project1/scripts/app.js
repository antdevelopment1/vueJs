new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth:100,
        gameIsRunning: false
    },
    methods: {
        startGame() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack() {
            let max = 10;
            let min = 3;
            let damage = Math.max(Math.floor(Math.random() * max) + 1, min);
            this.monsterHealth -= damage;
            if (this.monsterHealth <= 0) {
                alert('We won.');
                this.gameIsRunning = false;
                return;
            }
            max = 12;
            min = 5;
            damage = Math.max(Math.floor(Math.random() * max) + 1, min);
            this.playerHealth -= damage;
            if (this.playerHealth <= 0) {
                alert('You lost');
                this.gameIsRunning = false;
                // We don't need a return because this will the last line of code in this function
            }
        },
        specialAttack() {

        },
        heal() {

        },
        giveUp() {

        }
    }
})
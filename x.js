class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        let dano = 0; 

        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                dano = 45; 
                break;
            case "guerreiro":
                ataque = "usou espada";
                dano = 30; 
                break;
            case "monge":
                ataque = "usou artes marciais";
                dano = 35;
                break; 
            case "ninja":
                ataque = "usou shuriken";
                dano = 46;
                break; 
            default:
                ataque = "usou um ataque desconhecido";
        }

        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque} e causou ${dano} de dano.`);
    }
}

// Exemplo de uso da classe Heroi
const heroi1 = new Heroi("Gandalf", 150, "mago");
const heroi2 = new Heroi("Aragorn", 35, "guerreiro");

heroi1.atacar(); // Saída: "O mago Gandalf atacou usando magia e causou 45 de dano."
heroi2.atacar(); // Saída: "O guerreiro Aragorn atacou usando espada e causou 30 de dano."

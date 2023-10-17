function palpite ()
        {
            do {
                var numero_sorteado = Math.floor(Math.random() * 61);
            } while ((numero_sorteado === 0) || (numero_sorteado > 60)); 
            return (numero_sorteado);
        }
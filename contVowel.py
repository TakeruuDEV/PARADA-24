vogais = "aeiouAEIOU"

with open("poesia.txt", "r") as arquivo:
    texto = arquivo.read()

contador = 0
for letra in texto:
    if letra in vogais:
        contador += 1

print("O texto tem {} vogais.".format(contador))

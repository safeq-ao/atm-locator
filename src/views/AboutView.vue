<script setup lang="ts">
import OpenSidebar from '@/components/OpenSidebar.vue'
</script>
<template>
    <main class="mb-8">
        <section>
            <div class="section-content">
                <OpenSidebar />
            </div>
        </section>
        <section>
            <div class="section-content mb-4">
                <h2 class="flex items-center gap-2 mb-3">
                    <ion-icon name="information-circle-outline"></ion-icon>
                    <span>ATM Locator</span>
                </h2>

                <p class="text-justify">
                    <strong>ATM Locator</strong> é uma aplicação que visa auxiliar os usuários a
                    encontrarem caixas automáticos (ATMs) disponíveis em sua região com dinheiro ou
                    papel. Nosso aplicativo oferece uma solução fácil e rápida. Apresentamos uma
                    interface amigável que permite aos usuários localizar ATMs com base em sua
                    localização atual ou inserindo um endereço específico.
                    <br />
                    Você pode comparar os ATMs próximos para verificar quais têm dinheiro
                    disponível, notas, moedas ou ambos, além de visualizar detalhes adicionais sobre
                    cada localização, incluindo serviços oferecidos e horários de funcionamento.
                    Seja você um residente local ou alguém de passagem, nossa aplicação é a
                    ferramenta perfeita para encontrar os ATMs adequados para suas necessidades em
                    Luanda. Agradecemos por escolher o nosso aplicativo e esperamos que ele atenda
                    às suas expectativas.
                </p>
            </div>

            <div class="section-content">
                <h2 class="flex items-center gap-2">
                    <ion-icon name="mail-outline"></ion-icon>
                    <span>Contactos</span>
                </h2>
                <p>
                    <br />
                    Teremos prazer em responder a quaisquer perguntas que você possa ter sobre nossa
                    aplicação. Você pode entrar em contacto connosco por meio do email ou telefone
                    abaixo. Fique à vontade para nos fornecer seu feedback por meio de nossa página
                    de Feedback. Ficaremos felizes em responder a quaisquer perguntas que você possa
                    ter sobre nossos produtos, serviços ou empresa.

                    <span class="block mt-2">
                        Email:
                        <a href="mailto:atmlocator@gmail.com" class="font-medium">
                            atmlocalizador@gmail.com
                        </a>
                    </span>
                    <span class="block mt-2">
                        Telefone:
                        <a href="tel:+244 995123456" class="font-medium">+244 995 123 456</a>
                    </span>
                </p>
            </div>
        </section>
    </main>
</template>

<style scoped></style>

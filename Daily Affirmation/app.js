const btnElement = document.querySelector("button");
const spanElement = document.querySelector("span");

btnElement.addEventListener("click", () => {
    const yourName = prompt("Please Enter Your Name:");
    spanElement.textContent = yourName;
    const message = `My name is ${yourName}!I am worthy of love and respect.

I accept myself completely, just as I am.

I deserve happiness and fulfillment.

I choose to treat myself with kindness today.

My flaws and imperfections make me beautifully unique.

I am enough exactly as I am.

I am learning to love myself more every day.

My self-worth is not tied to others' opinions.

I honor my feelings and give myself permission to feel them.

I release the need for perfection and embrace growth.

I am grateful for who I am becoming.

I forgive myself for past mistakes and move forward with love.

I attract positive energy by loving myself fully.

I am deserving of care and compassion from myself.

I am proud of how far I’ve come.

I trust my journey and believe in my progress.

I radiate confidence and self-love.

I am deserving of all the good things life has to offer.

I celebrate my achievements, big and small.

I release any negative thoughts about myself.

I honor my body, mind, and soul with love.

I choose thoughts that empower me.

I am becoming the best version of myself.

I accept compliments with gratitude and grace.

I embrace who I am, inside and out.

I let go of comparison and focus on my journey.

I nurture my inner child with love and understanding.

I am allowed to take up space and express myself freely.

I trust that I am exactly where I need to be.

I am in control of my happiness and peace.

I speak kindly to myself because I deserve love.

I give myself permission to rest when needed.

I attract positive relationships by loving myself first.

I am grateful for my strengths and gifts.

I accept my body as it is and treat it with kindness.

I trust myself to make the right decisions.

I am worthy of setting and achieving meaningful goals.

I forgive myself for not knowing better in the past.

I celebrate my uniqueness every day.

I let go of self-judgment and embrace self-compassion.

I am deserving of peace and serenity.

I fill my mind with positive thoughts.

I am capable, confident, and courageous.

I appreciate myself for doing my best each day.

I surround myself with love and positivity.

I am worthy of my own affection and care.

I am open to giving and receiving love.

I honor my boundaries and respect my needs.

I choose love over fear in every situation.

I love myself unconditionally, today and always.`;

    const utterance = new SpeechSynthesisUtterance(message);

    window.speechSynthesis.speak(utterance);

});



// You have such a kind and positive presence that makes everyone around you feel valued and appreciated. Your ability to handle challenges with grace and resilience is truly inspiring, and I deeply admire the passion and dedication you bring to everything you do. You have an incredible way of making people feel comfortable and understood, which is such a rare and beautiful quality. Your creativity and unique perspective always add fresh ideas and solutions, making any situation better. The confidence and positivity you radiate uplift everyone you interact with, and your strength and commitment in handling responsibilities are remarkable. You turn even the simplest tasks into something extraordinary with your special touch. Your generosity and willingness to help others are qualities I deeply respect, and you consistently bring out the best in people with your encouragement and support. You are truly one of a kind, and I feel fortunate to know someone as amazing as you
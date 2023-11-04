<script lang="ts">
  import CalculatorButton from "./components/CalculatorButton.svelte";

    const controls = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "0", "+"];
    let displayText: string = "";

</script>

<div class="calculator">
    <!-- <div class="calculator__display"> -->
    <input class="calculator__display" bind:value={displayText} />
    <!-- </div> -->
    <div class="calculator__controls">
        {#each controls as control}
            <CalculatorButton displayVal={control} onClick={() => { displayText += control }} />
        {/each}
        <CalculatorButton displayVal={"="} onClick={() => { displayText = eval(displayText) }} width="3" />
    </div>
</div>

<style>

    .calculator {
        border: 1px solid;
        border-radius: 10px;
        width: 400px;
        height: fit-content;
        padding: 20px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .calculator__display {
        width: 80%;
        height: 50px;
        font-size: 30px;
        text-align: right;
    }

    .calculator__controls {
        padding-top: 20px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 15px;
        row-gap: 15px;
    }

</style>
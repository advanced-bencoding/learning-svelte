<script>

  import CustomizableTextBox from "../../common/components/CustomizableTextBox/CustomizableTextBox.svelte";
  import "./navbar.css";

</script>

<nav class="nav flex-row">
    <div class="flex-row">
        <img src="https://learn.svelte.dev/_app/immutable/assets/svelte-logo.5c5d7d20.svg" alt="logo.png" width="75rem" />
        <span class="nav__title">KIT</span>
        <span class="nav__title nav__title--gray">.SVELTE.DEV</span>
    </div>
    <div class="flex-row nav__search">
        <CustomizableTextBox variant="outlined" placeholder="Search">
        </CustomizableTextBox>
    </div>
    <div class="flex-row nav__links">
        <p>Docs</p>
        <p>Tutorial</p>
        <p>Svelte</p>
        <div class="flex-row nav__icons">
            icons
        </div>
    </div>
</nav>
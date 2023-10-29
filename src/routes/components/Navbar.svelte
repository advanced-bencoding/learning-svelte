<script>

  import CustomizableTextBox from "../../common/components/CustomizableTextBox/CustomizableTextBox.svelte";
  import "./navbar.css";
  import { drawerOpen } from "../../stores/appStore";

  let wasDrawerVisible = false;

  function openDrawer(){
    if(!$drawerOpen){
        wasDrawerVisible = false;
        drawerOpen.set(true);
        return;
    }
    wasDrawerVisible = true;
    drawerOpen.set(false);
  }

</script>

<nav class="nav flex-row">
    <div class="flex-row">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <img
            src="https://learn.svelte.dev/_app/immutable/assets/svelte-logo.5c5d7d20.svg"
            alt="logo.png"
            width="75rem"
            class="nav__image"
            class:nav__image--spin-clock={$drawerOpen}
            class:nav__image--spin-anticlock={wasDrawerVisible && !$drawerOpen}
            on:click={openDrawer}
        />
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
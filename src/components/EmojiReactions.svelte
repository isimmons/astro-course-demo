<script lang="ts">
  import { Emoji, emojiList } from "~/types/emoji";
  import EmojiReaction from "./EmojiReaction.svelte";
</script>

<div class="flex gap-x-2 justify-center items-center h-8">
  {#each emojiList as emoji}
    <EmojiReaction
      name={emoji}
      reacted={emoji === Emoji.heart}
      count={emoji === Emoji.heart ? 1 : 0}
    />
  {/each}
</div>

 <template>
    <footer class="footer"> 
      {{ value }}
    </footer>  
</template>

<script>
export default {
  name: "footer-name",
  data() {                      
    return {
      value: "powerd by smx"
    };
  },
  methods: {
  
  }
};
</script>

<style scoped lang="less">
.footer {
  // min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #aaa;
}

</style>

 

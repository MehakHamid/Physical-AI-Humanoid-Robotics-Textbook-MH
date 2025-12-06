# Module 1: The Robotic Nervous System (ROS 2)

**Focus: Middleware for robot control.**

- ROS 2 Nodes, Topics, and Services.
- Bridging Python Agents to ROS controllers using relpy.
- Understanding URDF (Unified Robot Description Format) for humanoids.

## Weekly Breakdown (Weeks 3-5: ROS 2 Fundamentals)

- ROS 2 architecture and core concepts  
- Nodes, topics, services, and actions  
- Building ROS 2 packages with Python  
- Launch files and parameter management  

## Example Code
```python
import rclpy
from rclpy.node import Node

class SimpleNode(Node):
    def __init__(self):
        super().__init__('simple_node')
        self.get_logger().info('ROS 2 Node Started')
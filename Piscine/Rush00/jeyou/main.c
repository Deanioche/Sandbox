/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   main.c                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jeyou <jeyou@student.42seoul.kr>           +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/02/05 18:15:56 by jeyou             #+#    #+#             */
/*   Updated: 2022/02/06 19:38:14 by hankim           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <stdlib.h>
#include <stdio.h>
#include <unistd.h>

void rush(int a, int b);

int main(int argc, char *argv[])
{
	(void)argc;
	rush(atoi(argv[1]), atoi(argv[2]));

	return (0);
}
